import styles from '../styles/Home.module.css'
import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

export default function Home() {
  const [data, setData] = useState("");

  // const handleChange = e => setData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  async function submitFn() {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/idid`, data);
      toast.info(res.data, { position: toast.POSITION.TOP_RIGHT });

    } catch(err) {
      console.log(err)
      toast.error(err.response.data, { position: toast.POSITION.TOP_RIGHT });
    }

    setData("")
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitFn();
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>adauga review</h1>
      <form onSubmit={handleSubmit} className={styles.form}>

        <input
          type="text"
          minLength="2"
          required
          autoFocus
          autoComplete="id"
          name="productID"
          className={styles.formInput}
          placeholder="productID produs"
          value={data.productID}
          onChange={() => setData(e.target.value)}
        />

        <button>creaza id</button>
      </form>
    </div>
  )
}
