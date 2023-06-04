> **Warning**
> This project is not actively maintained anymore

# npm-auth-gpr

This action authenticates npm for consuming and publishing packages from and to
the GitHub Package Registry.

# Usage

Make sure your project's local `.npmrc` and `package.json` is set up with the
right repository scope and URL. Take a look at the
[docs](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry)
or
[my step-by-step guide](https://dev.to/jgierer12/how-to-publish-packages-to-the-github-package-repository-4bai)
on how to do this.

```yaml
steps:
  - uses: actions/checkout@v1
  - uses: actions/setup-node@v1
    with:
      node-version: ${{ matrix.node-version }}
  - uses: jgierer12/npm-auth-gpr@v1
    with:
      token: ${{ secrets.GITHUB_TOKEN }}
  - run: npm install
  - run: npm publish
```

`secrets.GITHUB_TOKEN` is included in every GitHub Action's virtual environment
by default. You should be able to use it without any further setup. Of course,
you can also use a different token instead. This is useful if, for example, you
want to publish a repo different from the current one.

# License

[MIT](LICENSE) &copy; 2019 Jonas Gierer
