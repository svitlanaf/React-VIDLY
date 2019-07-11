// import * as Sentry from "@sentry/browser";

function init() {
  //   Sentry.init({
  //     dsn: "https://d1ad25a155504627808740cf87b187bf@sentry.io/1501997"
  //   });
}

function log(error) {
  console.log(error);
  //   Sentry.captureException(error);
}

export default {
  init,
  log
};
