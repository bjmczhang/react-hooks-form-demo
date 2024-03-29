import { useForm } from "react-hook-form";

const YoutubeForm = () => {
  const form = useForm();

  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" name="channel" />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
