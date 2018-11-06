test("browser api object in content script", (t) => {
  t.ok(browser && browser.runtime, "a global browser API object should be defined");
  t.ok(chrome && chrome.runtime, "a global chrome API object should be defined");

  // Check that the polyfill has created a wrapped API namespace as expected.
  t.notEqual(browser.runtime, chrome.runtime, "browser.runtime and chrome.runtime should not be equal");
  // On chrome, window is the global object and so the polyfilled browser API should
  // be also equal to window.browser.
  t.equal(browser, window.browser, "browser and window.browser should be the same object");
});

test("browser api object in background page", async (t) => {
  const reply = await browser.runtime.sendMessage("test-api-object-in-background-page");

  t.ok(reply.browserIsDefined, "a global browser API object should be defined");
  t.ok(reply.chromeIsDefined, "a global chrome API object should be defined");

  t.ok(!reply.browserIsUnchanged, "browser API object should have been defined by the polyfill");
  t.ok(!reply.windowBrowserIsUnchanged, "window.browser API object should have been defined by the polyfill");
});
