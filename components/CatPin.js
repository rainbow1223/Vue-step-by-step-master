var CatPin = Vue.component('CatPin', function (resolve, reject) {
    ajax.get("/components/CatPin.tpl.html", function (template_string) {
        resolve({
            template: template_string,
            props: ['image_url', 'author', 'tags', 'description', 'filter_value'],
            methods: {
                handle_tag_click: function (tag) {
                    this.$emit('tag-clicked', tag);
                }
            },
            components: {
                'author-signature': AuthorSignature
            }            
        });
    });
});  