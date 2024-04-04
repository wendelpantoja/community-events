import { ContainerFile, Label } from "./styles"
import { useState } from "react"

type UploadProps = {
    url: string;
    setUrlImagem: (urlImagem: string) => void;
}

export function UploadComponent({ url, setUrlImagem }: UploadProps) {
    const [preview, setPreview] = useState(url)

    function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files
        console.log(event.target.files)
        if(file) {
            const url = URL.createObjectURL(file[0])
            console.log(url)
            setPreview(URL.createObjectURL(file[0]))
        }
        // if(file) {
        //     const storageRef = ref(storage, `images/${file[0].name}`)
        //     const uploadTask = uploadBytesResumable(storageRef, file[0])

        //     uploadTask.on('state_changed', 
        //         (snapshot) => {
        //             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //             console.log('Upload is ' + progress + '% done')
        //         },
        //         (error) => {
        //             console.log(error)
        //         },
        //         () => {
        //             getDownloadURL(uploadTask.snapshot.ref)
        //             .then((downloadURL) => {
        //                 console.log('File available at', downloadURL)
        //                 setPreview(downloadURL)
        //                 setUrlImagem({
        //                     ["url_imagem"]: downloadURL
        //                 })
        //             })
        //         }
        //     )
        // }
    }

    return (  
        <ContainerFile>
            <Label htmlFor="file">
                {preview != '' && <img className="preview_image" src={preview} alt="" />}
                {preview === '' && <i className='bx bx-cloud-upload'></i>}
            </Label>
            <input 
                id="file"
                type="file" 
                name="url_imagem"
                onChange={handleFile}
            />
        </ContainerFile> 
    )
}