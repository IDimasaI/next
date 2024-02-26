import { useRouter } from 'next/router'
const index = () => {
    const router = useRouter()
    const { pid } = router.query
  
    return <p>main</p>
  }
  
  export default index