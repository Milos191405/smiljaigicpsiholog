import Navbar from "@/components/Navbar"
function Kontakt() {
  return (
    <>
        <Navbar />
        <article className="flex justify-center items-center h-96 text-2xl pt-20">
          <form className="flex flex-col text-lg ">
            <label for="first name" className="border border-gray-300">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
            <input type="submit" value="Submit"></input>
          </form>
   </article>
       </>
  )
}

export default Kontakt