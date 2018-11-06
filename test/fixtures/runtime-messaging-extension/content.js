test("sendMessage with returned Promise reply", async (t) => {
  const reply = await browser.runtime.sendMessage("test - sendMessage with returned Promise reply");
  t.equal(reply, "bg page reply 1");
});

test("sendMessage with returned value reply", async (t) => {
  const reply = await browser.runtime.sendMessage("test - sendMessage with returned value reply");
  t.equal(reply, "second listener reply");
});

test("sendMessage with synchronous sendResponse", async (t) => {
  const reply = await browser.runtime.sendMessage("test - sendMessage with synchronous sendResponse");
  t.equal(reply, "bg page reply 3");
});

test("sendMessage with asynchronous sendResponse", async (t) => {
  const reply = await browser.runtime.sendMessage("test - sendMessage with asynchronous sendResponse");
  t.equal(reply, "bg page reply 4");
});

test("second listener if the first does not reply", async (t) => {
  const reply = await browser.runtime.sendMessage("test - second listener if the first does not reply");
  t.equal(reply, "second listener reply");
});

test("sendMessage with returned rejected Promise with Error value", async (t) => {
  try {
    const reply = await browser.runtime.sendMessage("test - sendMessage with returned rejected Promise with Error value");
    t.fail(`Unexpected successfully reply while expecting a rejected promise`);
    t.equal(reply, undefined, "Unexpected successfully reply");
  } catch (err) {
    t.ok(err instanceof Error, "Got an error object as expected");
    t.equal(err.message, "rejected-error-value", "Got an error rejection with the expected message");
  }
});

test("sendMessage with returned rejected Promise with non-Error value", async (t) => {
  const reply = await browser.runtime.sendMessage("test - sendMessage with returned rejected Promise with non-Error value");
  t.fail(`Unexpected successfully reply while expecting a rejected promise`);
  t.equal(reply, undefined, "Unexpected successfully reply");
});

test("sendMessage with returned rejected Promise with non-Error value with message property", async (t) => {
  const reply = await browser.runtime.sendMessage("test - sendMessage with returned rejected Promise with non-Error value with message property");
  t.fail(`Unexpected successfully reply while expecting a rejected promise`);
  t.equal(reply, undefined, "Unexpected successfully reply");
});

test("sendMessage with listener callback throws", async (t) => {
  const reply = await browser.runtime.sendMessage("test - sendMessage with listener callback throws");
  t.fail(`Unexpected successfully reply while expecting a rejected promise`);
  t.equal(reply, undefined, "Unexpected successfully reply");
});

test("sendMessage and no listener answers", async (t) => {
  const reply = await browser.runtime.sendMessage("test - sendMessage and no listener answers");
  t.equal(reply, undefined, "Got undefined reply as expected");
});
