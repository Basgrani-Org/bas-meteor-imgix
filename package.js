Package.describe({
    name: 'basgrani:bas-meteor-imgix',
    version: '0.1.1_2',
    summary: 'imgix server/client wrapped for meteor',
    git: 'https://github.com/Basgrani-Org/bas-meteor-imgix'
});

Npm.depends({
    "imgix-core-js": "1.0.3"
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');

    // Vendor
    api.addFiles('imgix.js/dist/imgix.min.js', ['client']);
    api.addFiles('imgix.js/dist/imgix.jquery.min.js', ['client']);

    // Server
    api.addFiles('server.js', ['server']);

    // Export
    api.export('imgix', 'client');
    api.export('imgix', 'server');
});