// ═══════════════════════════════════════════════════════════
// PEDIGREE ENGINE — GENA×SIVOTEC
// Floating drawer (always accessible) + Debrief tab (full annotated)
// ═══════════════════════════════════════════════════════════

window.PedigreeEngine = (function() {

  // ── State ──────────────────────────────────────────────
  var _currentCaseId = null;
  var _drawerOpen = false;
  var _selectedMember = null;

  // ── Public: initialise overlay HTML (call once on page load) ──
  function init() {
    // Inject CSS
    var style = document.createElement('style');
    style.textContent = PED_CSS;
    document.head.appendChild(style);

    // Inject drawer markup
    var div = document.createElement('div');
    div.innerHTML = DRAWER_HTML;
    document.body.appendChild(div);

    // Inject floating button (hidden until a case is open)
    var btn = document.createElement('button');
    btn.id = 'ped-float-btn';
    btn.className = 'ped-float-btn';
    btn.innerHTML = '&#128100; Family';
    btn.style.display = 'none';
    btn.onclick = toggleDrawer;
    document.body.appendChild(btn);
  }

  // ── Public: called by openCase() / goBack() ──
  function setCaseId(id) {
    _currentCaseId = id;
    var btn = document.getElementById('ped-float-btn');
    if (btn) btn.style.display = id ? 'flex' : 'none';
    if (id && _drawerOpen) renderDrawer(id);
  }

  // ── Public: render inside debrief tab ──
  function renderDebriefTab(id) {
    var data = window.PEDIGREES && window.PEDIGREES[id];
    if (!data) return '<div style="padding:24px;color:#7f8c8d;font-size:13px;">No pedigree data for this case.</div>';

    var html = '<div class="ped-debrief-wrap">';

    // Header
    html += '<div class="ped-debrief-header">';
    html += '<div class="ped-debrief-title">Family Pedigree &mdash; ' + data.proband + '</div>';
    html += '<div class="ped-debrief-subtitle">' + data.inheritanceLabel + '</div>';
    html += '</div>';

    // SVG pedigree
    html += '<div class="ped-svg-container">';
    html += buildSVG(id, data, true);
    html += '</div>';

    // Member grid (clickable cards)
    html += '<div class="ped-member-grid">';
    data.members.forEach(function(m) {
      html += buildMemberCard(m, true);
    });
    html += '</div>';

    // GENA cascade section (only for genetic cases)
    if (data.cascade && data.cascade.length) {
      html += '<div class="ped-cascade-box">';
      html += '<div class="ped-cascade-title">&#129516; GENA Cascade Testing Recommendations</div>';
      html += '<div class="ped-cascade-subtitle">Based on ' + data.diagnosis + ' diagnosis in ' + data.proband + ', the following family members should be offered testing:</div>';
      html += '<div class="ped-cascade-list">';
      data.cascade.forEach(function(c) {
        html += '<div class="ped-cascade-item">';
        html += '<div class="ped-cascade-item-name">' + c.name + ' &mdash; <span style="color:#8fa8bc">' + c.relation + '</span></div>';
        html += '<div class="ped-cascade-item-test">' + c.test + '</div>';
        html += '<div class="ped-cascade-item-reason">' + c.reason + '</div>';
        html += '<div class="ped-cascade-priority priority-' + c.priority + '">' + c.priority.toUpperCase() + '</div>';
        html += '</div>';
      });
      html += '</div></div>';
    }

    // Inheritance explainer
    html += '<div class="ped-inheritance-box">';
    html += '<div class="ped-inh-label">' + data.inheritanceLabel + '</div>';
    html += '<div class="ped-inh-text">' + data.inheritanceExplainer + '</div>';
    html += '</div>';

    html += '</div>'; // .ped-debrief-wrap
    return html;
  }

  // ── Private: toggle drawer ──
  function toggleDrawer() {
    _drawerOpen = !_drawerOpen;
    var overlay = document.getElementById('ped-drawer-overlay');
    var drawer = document.getElementById('ped-drawer');
    if (overlay) overlay.classList.toggle('show', _drawerOpen);
    if (drawer) drawer.classList.toggle('open', _drawerOpen);
    if (_drawerOpen && _currentCaseId) renderDrawer(_currentCaseId);
  }

  function closeDrawer() {
    _drawerOpen = false;
    var overlay = document.getElementById('ped-drawer-overlay');
    var drawer = document.getElementById('ped-drawer');
    if (overlay) overlay.classList.remove('show');
    if (drawer) drawer.classList.remove('open');
  }
  window._pedCloseDrawer = closeDrawer;

  // ── Private: render drawer contents ──
  function renderDrawer(id) {
    var data = window.PEDIGREES && window.PEDIGREES[id];
    var panel = document.getElementById('ped-drawer-panel');
    if (!panel) return;

    if (!data) {
      panel.innerHTML = '<div style="padding:32px;text-align:center;color:#7f8c8d;font-size:13px;">No family history data available for this case.</div>';
      return;
    }

    var html = '<div class="ped-drawer-header">';
    html += '<div class="ped-drawer-title">&#128100; Family History &mdash; ' + data.proband + '</div>';
    html += '<div class="ped-drawer-inh">' + data.inheritanceLabel + '</div>';
    html += '</div>';

    // SVG
    html += '<div class="ped-svg-container drawer-svg">';
    html += buildSVG(id, data, false);
    html += '</div>';

    // Member info panel
    html += '<div class="ped-member-info" id="ped-member-info-' + id + '">';
    html += '<div class="ped-member-prompt">&#128072; Click any family member to explore their history</div>';
    html += '</div>';

    // Member list
    html += '<div class="ped-member-list">';
    data.members.forEach(function(m) {
      html += '<div class="ped-member-chip ped-status-' + m.status + '" onclick="window._pedSelectMember(\'' + id + '\',\'' + m.id + '\')">';
      html += '<span class="ped-chip-shape">' + shapeChar(m.sex, m.status) + '</span>';
      html += '<span class="ped-chip-name">' + m.name + '</span>';
      html += '<span class="ped-chip-rel">' + m.relation + '</span>';
      html += '</div>';
    });
    html += '</div>';

    panel.innerHTML = html;

    // Re-attach SVG click handlers
    attachSVGClicks(id, data);
  }

  // ── Private: select a member ──
  window._pedSelectMember = function(caseId, memberId) {
    var data = window.PEDIGREES && window.PEDIGREES[caseId];
    if (!data) return;
    var m = data.members.find(function(x){ return x.id === memberId; });
    if (!m) return;

    // Highlight in SVG
    data.members.forEach(function(x) {
      var el = document.getElementById('ped-node-' + caseId + '-' + x.id);
      if (el) el.classList.toggle('selected', x.id === memberId);
    });
    // Highlight in chip list
    document.querySelectorAll('.ped-member-chip').forEach(function(el) {
      el.classList.remove('active');
    });
    var chip = document.querySelector('.ped-member-chip[onclick*="' + memberId + '"]');
    if (chip) chip.classList.add('active');

    // Show info panel
    var panel = document.getElementById('ped-member-info-' + caseId);
    if (!panel) return;

    var statusColors = { affected: '#e74c3c', carrier: '#2874A6', unaffected: '#7f8c8d', deceased: '#c0392b', unknown: '#95a5a6' };
    var statusLabels = { affected: 'AFFECTED', carrier: 'CARRIER', unaffected: 'UNAFFECTED', deceased: 'DECEASED', unknown: 'UNKNOWN' };

    panel.innerHTML =
      '<div class="ped-info-card">' +
        '<div class="ped-info-top">' +
          '<div class="ped-info-shape ped-status-' + m.status + '">' + shapeChar(m.sex, m.status) + '</div>' +
          '<div class="ped-info-ident">' +
            '<div class="ped-info-name">' + m.name + (m.deceased ? ' <span class="ped-deceased-tag">&#8224;</span>' : '') + '</div>' +
            '<div class="ped-info-relation">' + m.relation + (m.age ? ' &nbsp;&middot;&nbsp; ' + m.age : '') + '</div>' +
          '</div>' +
          '<div class="ped-info-status" style="background:' + (statusColors[m.status]||'#7f8c8d') + '22;color:' + (statusColors[m.status]||'#7f8c8d') + ';border-color:' + (statusColors[m.status]||'#7f8c8d') + '44">' +
            statusLabels[m.status] +
          '</div>' +
        '</div>' +
        '<div class="ped-info-story">' + m.story + '</div>' +
        (m.symptoms ? '<div class="ped-info-symptoms"><strong>Symptoms / Findings:</strong> ' + m.symptoms + '</div>' : '') +
        (m.tested ? '<div class="ped-info-tested ' + m.tested.result + '"><strong>Genetic Testing:</strong> ' + m.tested.text + '</div>' : '') +
        (m.clinicalPearl ? '<div class="ped-info-pearl">&#128161; ' + m.clinicalPearl + '</div>' : '') +
      '</div>';
  };

  // ── Private: build SVG ──
  function buildSVG(caseId, data, isDebrief) {
    var layout = data.layout;
    var W = 520, H = layout.height || 200;
    var svg = '<svg class="ped-svg" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">';

    // Draw connectors first (behind nodes)
    if (data.connectors) {
      data.connectors.forEach(function(conn) {
        svg += '<line x1="' + conn.x1 + '" y1="' + conn.y1 + '" x2="' + conn.x2 + '" y2="' + conn.y2 + '" stroke="#3a5068" stroke-width="1.5"/>';
      });
    }
    if (data.coupleLines) {
      data.coupleLines.forEach(function(cl) {
        svg += '<line x1="' + cl.x1 + '" y1="' + cl.y1 + '" x2="' + cl.x2 + '" y2="' + cl.y2 + '" stroke="#3a5068" stroke-width="1.5"/>';
        // Drop line to children
        if (cl.dropX !== undefined) {
          svg += '<line x1="' + cl.dropX + '" y1="' + cl.y1 + '" x2="' + cl.dropX + '" y2="' + cl.dropY + '" stroke="#3a5068" stroke-width="1.5"/>';
        }
      });
    }
    if (data.siblingLines) {
      data.siblingLines.forEach(function(sl) {
        svg += '<line x1="' + sl.x1 + '" y1="' + sl.y + '" x2="' + sl.x2 + '" y2="' + sl.y + '" stroke="#3a5068" stroke-width="1.5"/>';
        sl.drops.forEach(function(d) {
          svg += '<line x1="' + d.x + '" y1="' + sl.y + '" x2="' + d.x + '" y2="' + d.y + '" stroke="#3a5068" stroke-width="1.5"/>';
        });
      });
    }

    // Draw nodes
    data.members.forEach(function(m) {
      svg += buildNode(m, caseId, isDebrief);
    });

    svg += '</svg>';
    return svg;
  }

  function buildNode(m, caseId, isDebrief) {
    var x = m.x, y = m.y, r = 20;
    var colors = {
      affected:   { fill: '#2c0a0a', stroke: '#e74c3c', inner: 'rgba(231,76,60,0.35)' },
      carrier:    { fill: '#0a1a2c', stroke: '#2874A6', inner: 'rgba(40,116,166,0.3)' },
      unaffected: { fill: '#1a2535', stroke: '#4a6278', inner: 'rgba(74,98,120,0.15)' },
      deceased:   { fill: '#1c0a0a', stroke: '#e74c3c', inner: 'rgba(231,76,60,0.2)' },
      unknown:    { fill: '#1a2535', stroke: '#6b7a8a', inner: 'rgba(107,122,138,0.2)' }
    };
    var c = colors[m.status] || colors.unaffected;
    var isProband = m.isProband;
    var svg = '';

    // Proband glow ring
    if (isProband) {
      if (m.sex === 'M') {
        svg += '<rect x="' + (x-r-4) + '" y="' + (y-r-4) + '" width="' + (r*2+8) + '" height="' + (r*2+8) + '" rx="6" fill="none" stroke="#c9a84c" stroke-width="2" opacity="0.5"/>';
      } else {
        svg += '<circle cx="' + x + '" cy="' + y + '" r="' + (r+4) + '" fill="none" stroke="#c9a84c" stroke-width="2" opacity="0.5"/>';
      }
    }

    var clickHandler = 'onclick="window._pedSelectMember(\'' + caseId + '\',\'' + m.id + '\')" style="cursor:pointer"';
    svg += '<g id="ped-node-' + caseId + '-' + m.id + '" class="ped-node" ' + clickHandler + '>';

    if (m.sex === 'M') {
      svg += '<rect x="' + (x-r) + '" y="' + (y-r) + '" width="' + (r*2) + '" height="' + (r*2) + '" rx="4" fill="' + c.fill + '" stroke="' + c.stroke + '" stroke-width="' + (isProband?2.5:1.5) + '"/>';
      if (m.status === 'affected' || m.status === 'deceased') {
        svg += '<rect x="' + (x-r+4) + '" y="' + (y-r+4) + '" width="' + (r*2-8) + '" height="' + (r*2-8) + '" rx="2" fill="' + c.inner + '"/>';
      }
      if (m.status === 'carrier') {
        svg += '<circle cx="' + x + '" cy="' + y + '" r="6" fill="' + c.stroke + '" opacity="0.7"/>';
      }
    } else {
      svg += '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c.fill + '" stroke="' + c.stroke + '" stroke-width="' + (isProband?2.5:1.5) + '"/>';
      if (m.status === 'affected' || m.status === 'deceased') {
        svg += '<circle cx="' + x + '" cy="' + y + '" r="' + (r-5) + '" fill="' + c.inner + '"/>';
      }
      if (m.status === 'carrier') {
        svg += '<circle cx="' + x + '" cy="' + y + '" r="6" fill="' + c.stroke + '" opacity="0.7"/>';
      }
    }

    // Deceased slash
    if (m.deceased) {
      svg += '<line x1="' + (x-r) + '" y1="' + (y-r) + '" x2="' + (x+r) + '" y2="' + (y+r) + '" stroke="#e74c3c" stroke-width="1.5" opacity="0.6"/>';
    }
    // Unknown ?
    if (m.status === 'unknown') {
      svg += '<text x="' + x + '" y="' + (y+5) + '" text-anchor="middle" fill="#8fa8bc" font-size="14" font-weight="bold">?</text>';
    }
    // Proband arrow
    if (isProband) {
      svg += '<text x="' + (x-r-8) + '" y="' + (y+5) + '" text-anchor="end" fill="#c9a84c" font-size="12" font-weight="bold">&#8594;</text>';
    }

    // Name label
    var labelY = y + r + 14;
    var shortName = m.name.split(' ')[0];
    svg += '<text x="' + x + '" y="' + labelY + '" text-anchor="middle" fill="' + (isProband?'#c9a84c':'#8fa8bc') + '" font-size="9" font-family="system-ui" font-weight="' + (isProband?'700':'400') + '">' + shortName + '</text>';

    // Age if present
    if (m.age) {
      svg += '<text x="' + x + '" y="' + (labelY+11) + '" text-anchor="middle" fill="#5a7a8a" font-size="8" font-family="system-ui">' + m.age + '</text>';
    }

    svg += '</g>';
    return svg;
  }

  function attachSVGClicks(caseId, data) {
    // SVG click handlers already inline via onclick attrs - nothing extra needed
  }

  function buildMemberCard(m, full) {
    var statusColors = { affected:'#e74c3c', carrier:'#2874A6', unaffected:'#7f8c8d', deceased:'#c0392b', unknown:'#95a5a6' };
    var sc = statusColors[m.status] || '#7f8c8d';
    return '<div class="ped-member-card ped-status-' + m.status + '" onclick="window._pedSelectMemberDebrief(\'' + m.id + '\')">' +
      '<div class="ped-card-shape">' + shapeChar(m.sex, m.status) + '</div>' +
      '<div class="ped-card-body">' +
        '<div class="ped-card-name">' + m.name + (m.deceased?' &#8224;':'') + ' <span class="ped-card-status" style="color:' + sc + '">' + m.status + '</span></div>' +
        '<div class="ped-card-rel">' + m.relation + (m.age?' · '+m.age:'') + '</div>' +
        '<div class="ped-card-story">' + m.story + '</div>' +
      '</div>' +
    '</div>';
  }

  function shapeChar(sex, status) {
    if (sex === 'M') return status === 'affected' || status === 'deceased' ? '■' : status === 'carrier' ? '◈' : '□';
    return status === 'affected' || status === 'deceased' ? '●' : status === 'carrier' ? '⊛' : '○';
  }

  // ── CSS ──────────────────────────────────────────────
  var PED_CSS = `
  /* Float button */
  .ped-float-btn {
    position: fixed; bottom: 24px; right: 24px; z-index: 400;
    display: flex; align-items: center; gap: 8px;
    padding: 10px 18px; border-radius: 24px;
    background: #1a2e42; border: 1px solid #2874A6;
    color: #aed6f1; font-size: 13px; font-weight: 600;
    font-family: inherit; cursor: pointer;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    transition: all 0.2s;
  }
  .ped-float-btn:hover { background: #2874A6; color: white; transform: translateY(-2px); }

  /* Drawer overlay */
  .ped-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 450; display: none; }
  .ped-overlay.show { display: block; }

  /* Drawer */
  .ped-drawer {
    position: fixed; top: 0; right: -480px; width: 480px; height: 100vh;
    background: #111e2d; border-left: 1px solid #2a3f55;
    z-index: 451; overflow-y: auto;
    transition: right 0.3s ease;
    display: flex; flex-direction: column;
  }
  .ped-drawer.open { right: 0; }

  .ped-drawer-close {
    position: absolute; top: 16px; right: 16px;
    background: transparent; border: none; color: #8fa8bc;
    font-size: 18px; cursor: pointer; padding: 4px 8px;
    border-radius: 4px; transition: background 0.15s;
  }
  .ped-drawer-close:hover { background: rgba(255,255,255,0.08); color: white; }

  .ped-drawer-panel { padding: 20px; }

  .ped-drawer-header { margin-bottom: 16px; padding-right: 32px; }
  .ped-drawer-title { font-size: 15px; font-weight: 600; color: #e8eef4; margin-bottom: 4px; }
  .ped-drawer-inh { font-size: 11px; color: #c9a84c; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }

  /* SVG container */
  .ped-svg-container { background: #0e1823; border: 1px solid #2a3f55; border-radius: 10px; padding: 16px; margin-bottom: 16px; }
  .drawer-svg { }
  .ped-svg { width: 100%; height: auto; display: block; }

  /* Node hover/selected */
  .ped-node { transition: filter 0.15s; }
  .ped-node:hover { filter: brightness(1.5); }
  .ped-node.selected rect, .ped-node.selected circle { stroke-width: 3 !important; filter: drop-shadow(0 0 6px currentColor); }

  /* Member prompt */
  .ped-member-prompt { padding: 16px; text-align: center; color: #8fa8bc; font-size: 13px; }

  /* Member info card */
  .ped-info-card { background: #1a2e42; border: 1px solid #2a3f55; border-radius: 10px; padding: 16px; margin-bottom: 16px; }
  .ped-info-top { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px; }
  .ped-info-shape { font-size: 24px; flex-shrink: 0; padding-top: 2px; }
  .ped-status-affected .ped-info-shape, .ped-status-deceased .ped-info-shape { color: #e74c3c; }
  .ped-status-carrier .ped-info-shape { color: #2874A6; }
  .ped-status-unaffected .ped-info-shape { color: #7f8c8d; }
  .ped-info-ident { flex: 1; }
  .ped-info-name { font-size: 15px; font-weight: 600; color: #e8eef4; margin-bottom: 2px; }
  .ped-info-relation { font-size: 12px; color: #8fa8bc; }
  .ped-deceased-tag { color: #e74c3c; font-size: 13px; }
  .ped-info-status { font-size: 10px; font-weight: 700; letter-spacing: 0.08em; padding: 3px 8px; border-radius: 4px; border: 1px solid; flex-shrink: 0; }
  .ped-info-story { font-size: 13px; color: #bdc9d4; line-height: 1.6; margin-bottom: 10px; }
  .ped-info-symptoms { font-size: 12.5px; color: #aed6f1; background: rgba(40,116,166,0.1); border-left: 3px solid #2874A6; padding: 8px 10px; border-radius: 0 6px 6px 0; margin-bottom: 8px; line-height: 1.5; }
  .ped-info-tested { font-size: 12px; padding: 8px 10px; border-radius: 6px; margin-bottom: 8px; line-height: 1.5; }
  .ped-info-tested.positive { background: rgba(192,57,43,0.12); color: #e74c3c; }
  .ped-info-tested.negative { background: rgba(30,132,73,0.12); color: #82e0aa; }
  .ped-info-tested.pending { background: rgba(201,168,76,0.1); color: #c9a84c; }
  .ped-info-tested.carrier { background: rgba(40,116,166,0.12); color: #5dade2; }
  .ped-info-pearl { font-size: 12px; color: #c9a84c; background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.2); border-radius: 6px; padding: 8px 10px; line-height: 1.5; }

  /* Member chip list */
  .ped-member-list { display: flex; flex-direction: column; gap: 6px; }
  .ped-member-chip { display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 8px; background: #1a2535; border: 1px solid #2a3f55; cursor: pointer; transition: all 0.15s; }
  .ped-member-chip:hover { border-color: #2874A6; background: rgba(40,116,166,0.1); }
  .ped-member-chip.active { border-color: #c9a84c; background: rgba(201,168,76,0.08); }
  .ped-chip-shape { font-size: 16px; width: 24px; text-align: center; }
  .ped-status-affected .ped-chip-shape, .ped-status-deceased .ped-chip-shape { color: #e74c3c; }
  .ped-status-carrier .ped-chip-shape { color: #2874A6; }
  .ped-status-unaffected .ped-chip-shape { color: #7f8c8d; }
  .ped-chip-name { font-size: 13px; font-weight: 500; color: #e8eef4; flex: 1; }
  .ped-chip-rel { font-size: 11px; color: #8fa8bc; }

  /* Debrief tab wrapper */
  .ped-debrief-wrap { padding: 4px 0; }
  .ped-debrief-header { margin-bottom: 20px; }
  .ped-debrief-title { font-size: 16px; font-weight: 600; color: #1c2833; margin-bottom: 4px; }
  .ped-debrief-subtitle { font-size: 12px; color: #2874A6; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; }

  /* Debrief member grid */
  .ped-member-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 16px; margin-bottom: 20px; }
  .ped-member-card { background: #f8fafb; border: 1px solid #dde8f0; border-radius: 8px; padding: 12px; cursor: pointer; transition: all 0.15s; display: flex; gap: 10px; }
  .ped-member-card:hover { border-color: #2874A6; background: #eaf4fb; }
  .ped-card-shape { font-size: 22px; flex-shrink: 0; }
  .ped-status-affected .ped-card-shape, .ped-status-deceased .ped-card-shape { color: #c0392b; }
  .ped-status-carrier .ped-card-shape { color: #2874A6; }
  .ped-status-unaffected .ped-card-shape { color: #7f8c8d; }
  .ped-card-name { font-size: 13px; font-weight: 600; color: #1c2833; }
  .ped-card-status { font-size: 10px; font-weight: 400; margin-left: 6px; }
  .ped-card-rel { font-size: 11px; color: #7f8c8d; margin-bottom: 4px; }
  .ped-card-story { font-size: 12px; color: #566573; line-height: 1.5; }

  /* Cascade box */
  .ped-cascade-box { background: linear-gradient(135deg, #0d1f2e, #122436); border: 1px solid rgba(201,168,76,0.3); border-radius: 10px; padding: 20px; margin-bottom: 20px; }
  .ped-cascade-title { font-size: 14px; font-weight: 700; color: #c9a84c; margin-bottom: 6px; }
  .ped-cascade-subtitle { font-size: 12px; color: #8fa8bc; margin-bottom: 16px; line-height: 1.5; }
  .ped-cascade-list { display: flex; flex-direction: column; gap: 10px; }
  .ped-cascade-item { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 8px; padding: 12px 14px; position: relative; }
  .ped-cascade-item-name { font-size: 13px; font-weight: 600; color: #e8eef4; margin-bottom: 4px; }
  .ped-cascade-item-test { font-size: 12px; color: #aed6f1; margin-bottom: 4px; font-family: monospace; }
  .ped-cascade-item-reason { font-size: 12px; color: #8fa8bc; line-height: 1.5; }
  .ped-cascade-priority { position: absolute; top: 12px; right: 12px; font-size: 9px; font-weight: 700; letter-spacing: 0.08em; padding: 3px 7px; border-radius: 3px; }
  .priority-urgent { background: rgba(192,57,43,0.25); color: #e74c3c; border: 1px solid rgba(192,57,43,0.4); }
  .priority-high { background: rgba(201,168,76,0.2); color: #c9a84c; border: 1px solid rgba(201,168,76,0.3); }
  .priority-routine { background: rgba(40,116,166,0.2); color: #5dade2; border: 1px solid rgba(40,116,166,0.3); }

  /* Inheritance explainer */
  .ped-inheritance-box { background: #eaf4fb; border: 1px solid #aed6f1; border-radius: 8px; padding: 16px; }
  .ped-inh-label { font-size: 12px; font-weight: 700; color: #2874A6; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px; }
  .ped-inh-text { font-size: 13px; color: #1c2833; line-height: 1.65; }
  `;

  var DRAWER_HTML = `
  <div class="ped-overlay" id="ped-drawer-overlay" onclick="window._pedCloseDrawer()"></div>
  <div class="ped-drawer" id="ped-drawer">
    <button class="ped-drawer-close" onclick="window._pedCloseDrawer()">&#10005;</button>
    <div class="ped-drawer-panel" id="ped-drawer-panel">
      <div style="padding:40px;text-align:center;color:#8fa8bc;font-size:13px;">Loading family history...</div>
    </div>
  </div>
  `;

  return { init: init, setCaseId: setCaseId, renderDebriefTab: renderDebriefTab };

})();
