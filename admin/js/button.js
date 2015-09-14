(function(){

    if (typeof window.customToolbarElements === 'undefined') { window.customToolbarElements = []; }
    window.customToolbarElements.push({
        identifier: 'table',
        button: {
            title  : 'Table',
            label  : '<i class="fa fa-fw fa-table"></i>'
        },
        processAction: function(editor) {
            var cm      = editor.editor,
                pos     = cm.getDoc().getCursor(true),
                posend  = cm.getDoc().getCursor(false);

            var text =  '|  One | Two |' + '\n' +
                        '| :--- | :--- |' + '\n' +
                        '| 1 | 2 |';

            for (var i=pos.line; i<(posend.line+1);i++) {
                cm.replaceRange(text+cm.getLine(i), { line: i, ch: 0 }, { line: i, ch: cm.getLine(i).length });
            }

            cm.setCursor({ line: posend.line, ch: cm.getLine(posend.line).length });
            cm.focus();
        }
    });

})();