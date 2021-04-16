import Head from 'next/head'
import styles from '../styles/Home.module.css'
import store from './redux/store'
import {Provider} from 'react-redux'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Home({data}) {
  console.log(data)
  return (
    <Provider store={store}>
      
      {data.map((item,index)=>{
        const {title,body,userId}=item;
        if(index<10){
          return(
            <div  key={""+index}>
              
              <div style={{margin:"2px 12px 12px 12px",color:"blue",fontSize:"20px"}}>
              <b style={{margin:"12px 12px 12px 12px",color:'black'}}>Title</b><br/>
              <Link href={{pathname:"http://localhost:3000/api/[title]",query:{title}}}>
                {title}
              </Link>
              </div>
              <div style={{margin:"12px 12px 12px 12px"}}>
              <b style={{margin:"12px 12px 12px 12px",color:'black'}}>Body</b><br/>
                {body}
              </div>
            </div>
          )
     
        }
           })}
    </Provider>
  )
}
export async function getStaticProps(context){
  const res=await fetch("http://jsonplaceholder.typicode.com/posts");
  const data=await res.json()
  if(data){
    return{
      props:{data}
    }
  }
  else{
    console.log("no data")
  }
}
