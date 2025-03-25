import HelloWorld from "../../components/HelloWorld.js"; //I don't get why here's ../../ works instead ../ 

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <HelloWorld name="Focus Bear" />
    </div>
  );
}
