/* eslint-disable */

'use strict';

var should = require('should'),
    fs = require('fs'),
    path = require('path'),
    Vinyl = require('vinyl'),
    extractCss = require('../index');

function getFile(filePath) {
    return new Vinyl({
        path: path.resolve(filePath),
        cwd: './test/',
        base: path.dirname(filePath),
        contents: Buffer.from(String(fs.readFileSync(filePath)))
    });
}

function compare(fixturePath, expectedHTML, expectedCSS, options, done) {
    var file = getFile(fixturePath);

    options.url = 'file://' + file.path;

    extractCss(file.contents.toString('utf8'), options, function (err, html, css) {
        html.should.be.equal(String(fs.readFileSync(expectedHTML)));
        css.should.be.equal(String(fs.readFileSync(expectedCSS)));

        done();
    });
}

describe('extract-css', function() {
    it('Should separate css and html', function(done) {
        var options = {
            applyStyleTags: true,
            removeStyleTags: true,
            applyLinkTags: true,
            removeLinkTags: true,
            preserveMediaQueries: false
        };
        compare(
            path.join('test', 'fixtures', 'in.html'),
            path.join('test', 'expected', 'out.html'),
            path.join('test', 'expected', 'file.css'),
            options,
            done
        );
    });

    it('Should handle malformed CSS', function(done) {
        var options = {
            applyStyleTags: true,
            removeStyleTags: true,
            applyLinkTags: true,
            removeLinkTags: true,
            preserveMediaQueries: false
        };
        compare(
            path.join('test', 'fixtures', 'malformed.html'),
            path.join('test', 'expected', 'malformed.html'),
            path.join('test', 'expected', 'malformed.css'),
            options,
            done
        );
    });

    it('Should ignore code blocks', function(done) {
        var options = {
            applyStyleTags: true,
            removeStyleTags: true,
            applyLinkTags: true,
            removeLinkTags: true,
            preserveMediaQueries: false
        };
        compare(
            path.join('test', 'fixtures', 'codeblocks.html'),
            path.join('test', 'expected', 'codeblocks.html'),
            path.join('test', 'expected', 'codeblocks.css'),
            options,
            done
        );
    });
});
