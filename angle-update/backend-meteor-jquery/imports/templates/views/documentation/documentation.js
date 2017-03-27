Template.documentation.onRendered(function() {
    $('.flatdoc').each(function(){

      Flatdoc.run({

        fetcher: Flatdoc.file('documentation/readme.md'),

        // Setup custom element selectors (markup validates)
        root:    '.flatdoc',
        menu:    '.flatdoc-menu',
        title:   '.flatdoc-title',
        content: '.flatdoc-content'

      });

    });

})
