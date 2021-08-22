const rewire = require("rewire")
const RelayEnvironment = rewire("./RelayEnvironment")
const fetchRelay = RelayEnvironment.__get__("fetchRelay")
// @ponicode
describe("fetchRelay", () => {
    test("0", async () => {
        await fetchRelay({ name: "dummyName", text: "foo bar" }, "UPDATE Projects SET pname = %s WHERE pid = %s")
    })

    test("1", async () => {
        await fetchRelay({ name: "dummy_name", text: "Hello, world!" }, "UNLOCK TABLES;")
    })

    test("2", async () => {
        await fetchRelay({ name: "$dummy_name", text: "This is a Text" }, "DROP TABLE tmp;")
    })

    test("3", async () => {
        await fetchRelay({ name: "/dummy_name", text: "foo bar" }, "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
    })

    test("4", async () => {
        await fetchRelay({ name: "dummyName123", text: "Foo bar" }, "UPDATE Projects SET pname = %s WHERE pid = %s")
    })

    test("5", async () => {
        await fetchRelay(undefined, undefined)
    })
})
