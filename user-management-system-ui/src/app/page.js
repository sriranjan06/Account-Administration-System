import Navbar from "@/components/Navbar";
import UserList from "@/components/UserList";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <div>
          <UserList></UserList>
        </div>
      </main>
    </>
  );
}
