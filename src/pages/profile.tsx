import ProfileForm from "@/components/profile/Profile";

export default function Profile() {
  return (
    <section
      className="bg-[#ffff] m-[15px] h-[845px] rounded-md shadow-lg px-[20px] py-[60px] flex justify-center"
    >
      <div className="flex justify-center border border-slate-300 px-[80px] rounded-xl shadow-xl">
        <ProfileForm />
      </div>
    </section>
  )
}