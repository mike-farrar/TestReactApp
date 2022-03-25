import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="email" placeholder="Manager Email" {...register("Manager Email", {})} />
      <input type="text" placeholder="Office Location" {...register("Office Location", {})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input {...register("Department", { required: true })} type="radio" value="IT" />
      <input {...register("Department", { required: true })} type="radio" value="Finance" />
      <input {...register("Department", { required: true })} type="radio" value="HR" />

      <input {...register} type="radio" value="Full Time" />
      <input {...register} type="radio" value="Contractor" />
      <input {...register} type="radio" value="Vendor" />
      <input {...register} type="radio" value="Intern" />
      <input type="datetime" placeholder="Start Date" {...register("Start Date", {})} />

      <input {...register} type="radio" value="AP@blank.com" />
      <input {...register} type="radio" value="AR@blank.com" />
      <input {...register} type="radio" value="it@blank.com" />

      <input {...register} type="radio" value="\\Server\share1" />
      <input {...register} type="radio" value="\\sever\share2" />
      <input {...register} type="radio" value="\\server\share3" />

      <input {...register} type="radio" value="Team1" />
      <input {...register} type="radio" value="Team2" />
      <input {...register} type="radio" value="Team3" />

      <input {...register} type="radio" value="DL1@blank.com" />
      <input {...register} type="radio" value="DL2@blank.com" />
      <input {...register} type="radio" value="Dl3@blank.com" />

      <input {...register} type="radio" value="App1" />
      <input {...register} type="radio" value="App2" />
      <input {...register} type="radio" value="App3" />

      <input type="submit" />
    </form>
  );
}


export default App;