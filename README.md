# Drupal CMS

Drupal CMS is a fast-moving open source product that enables site builders to easily create new Drupal sites and extend them with smart defaults, all using their browser.

## Getting started

Drupal CMS works with [DDEV](https://ddev.com) and has experimental support for [Drupack](https://drupal.org/project/drupack). DDEV is a full-featured, Docker-based development environment. Drupack is a fast, production-ready server that doesn't include development tools.

### DDEV (recommended)

1. Install DDEV following the [documentation](https://ddev.com/get-started/)
2. Open the command line and `cd` to the root directory of this project
3. Run `ddev launch`

To use a different web root, run `ddev config --docroot=new_web_root` _before_ `ddev launch`.

### Drupack (experimental)

Open the command line and `cd` into the root directory of this project, then:

1. Download Drupack:
```shell
# macOS and Linux:
curl -fsSL https://drupack.tresbien.tech/install.sh | sh

# PowerShell (Windows):
irm https://drupack.tresbien.tech/install.ps1 | iex
```
2. [Download `composer.phar`](https://getcomposer.org/download/latest-stable/composer.phar) into this directory
3. Install dependencies and run:
```shell
./drupack composer.phar i
./drupack
```
4. Delete `composer.phar` (optional)

Drupal CMS has the same system requirements as Drupal core, so you can use your preferred setup to run it locally. [See the Drupal User Guide for more information](https://www.drupal.org/docs/user_guide/en/installation-chapter.html) on how to set up Drupal.

### Installation options

The Drupal CMS installer offers a list of features preconfigured with smart defaults. You will be able to customize whatever you choose, and add additional features, once you are logged in.

After the installer is complete, you will land on the dashboard.

If you want to install Drupal CMS using Drush, use the following commands:

```shell
# Download a site template -- for example, Starter.
ddev composer require drupal/drupal_cms_starter --update-with-all-dependencies

# Use it to install Drupal.
ddev drush site:install /var/www/html/recipes/drupal_cms_starter --yes
```

## Documentation

* [Drupal CMS User Guide](https://project.pages.drupalcode.org/drupal_cms/)
* Learn more about managing a Drupal-based application in the [Drupal User Guide](https://www.drupal.org/docs/user_guide/en/index.html).
* [Product roadmap](https://drupalcmsroadmap1.acquia.site/)

## Contributing & Support

[Report issues in the queue](https://drupal.org/node/add/project-issue/drupal_cms), providing as much detail as you can. You can also join the #drupal-cms-support channel in the [Drupal Slack community](https://www.drupal.org/slack).

Drupal CMS is developed in [a separate repository on Drupal.org](https://www.drupal.org/project/drupal_cms). See [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## License

Drupal CMS and all derivative works are licensed under the [GNU General Public License, version 2 or later](http://www.gnu.org/licenses/old-licenses/gpl-2.0.html).

Learn about the [Drupal trademark and logo policy here](https://www.drupal.com/trademark).
