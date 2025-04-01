export default function Loggedin() {
  return (
    <div className="h-screen flex justify-center items-center flex-col m-2 ">
      <form>
        <div className="border-2 rounded-2xl mt-1 p-2 bg-amber-50">
          <div className=" text-2xl p-2 font-bold">
            <h3>Log In</h3>
          </div>

          <div>
            <div className="border-2 p-2 m-2 items rounded-2xl bg-amber-200">
              <h2>enter the username</h2>
              <input
                className="bg-white rounded-2xl p-0.5 mb-1"
                type="text"
                placeholder="  enter the username"
                id="username"
              />
            </div>
            <div className="border-2 p-2 m-2 items rounded-2xl bg-amber-500">
              <h2>enter the password</h2>
              <input
                className="bg-white rounded-2xl p-0.5 mb-1"
                type="text"
                placeholder="  enter the password"
                id="password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="border-2 p-2 m-2 items rounded-2xl bg-black text-white"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
