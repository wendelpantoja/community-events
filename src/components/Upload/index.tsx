import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { ContainerFile, Label } from "./styles"
import { storage } from "../../services/fireBaseConfig"
import { useState } from "react"

interface Upload {
    url_imagem: string,
}

type UploadProps = {
    setUrlImagem: (urlImagem: Upload) => void
}

export function UploadComponent({ setUrlImagem }: UploadProps) {
    const [preview, setPreview] = useState('')

    function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files

        if(file) {
            const storageRef = ref(storage, `images/${file[0].name}`)
            const uploadTask = uploadBytesResumable(storageRef, file[0])

            uploadTask.on('state_changed', 
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    console.log('Upload is ' + progress + '% done')
                },
                (error) => {
                    console.log(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                        console.log('File available at', downloadURL)
                        setPreview(downloadURL)
                        setUrlImagem({
                            ["url_imagem"]: downloadURL
                        })
                    })
                }
            )
            }
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