import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title}-B Sarees`
    }
    ,[title])
}

export default useTitle;