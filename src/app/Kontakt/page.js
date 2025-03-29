import Navbar from "@/components/Navbar"
function Kontakt() {
  return (
    <>
        <Navbar />
        <h1 className="pt-20 text-center">Kontakt</h1>
        <article className="flex justify-center items-center pt-10">
          <form className="flex flex-col  ">
            <label for="first name" className="">Ime</label>
            <input type="text" id="fname" name="firstname" placeholder="Ime..." className="border border-foreground"></input>
            <label for="lname">Prezime</label>
            <input type="text" id="lname" name="lastname" placeholder="Prezime.."></input>
            <label for="subject">Tema</label>
            <textarea id="subject" name="subject" placeholder="Reci mi sta te muci.."></textarea>
            <input type="submit" value="Submit"></input>
          </form>
   </article>
       </>
  )
}

export default Kontakt