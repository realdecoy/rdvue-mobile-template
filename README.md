# Mobile App

This is a project template for [RDVue](https://github.com/realdecoy/rdvue).

To create a new project based on this template, using RDVue

```
rdvue create-project <project-name> --mobile
cd <project-name>
```

_Note that you will need to set your environment up for mobile development. See [NativeScript's Environment Setup Notes](https://docs.nativescript.org/environment-setup.html)._

_Note that ios support is still being tested_


# Testing your app

Before running your automated tests against any device for the first time, please make sure that:

- Your emulator is running
- You have successfully installed and executed your app on the device at least once, by running the following command:
```
# on Android devices:
ns run android
```

Once all of the above steps have been completed, and you have not experienced any errors, you can start running your tests.

## Unit Testing
This template uses NativeScript's Mocha integration for unit testing. You can run your tests by executing:

```
ns test android --justrun
# Or
npm run test-android
```

The `--justrun` flag prevents the test runner from watching for changes, and allows it to terminate on completion. If you want the test runner to watch for changes,
run `ns test android` instead.
