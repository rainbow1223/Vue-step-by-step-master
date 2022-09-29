var AuthorSignature = Vue.component('AuthorSignature', function (resolve, reject) {
    ajax.get("/components/AuthorSignature.tpl.html", function (template_string) {
        resolve({
            template: template_string,
            props: ['name', 'avatar_url', 'status', 'gender'],
            computed: {
                avatar: function () {                            
                    return this.avatar_url ||
                        ((this.gender == 'female')
                            ? '/assets/img/avatars/default-female-avatar.jpg'
                            : '/assets/img/avatars/default-male-avatar.png')
                }
            }
        })
    });
});