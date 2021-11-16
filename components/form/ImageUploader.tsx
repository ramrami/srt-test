import { ButtonBase } from "@material-ui/core"
import Button from "app/tailwindHelpers/Button"
import { useState, useRef, useEffect } from "react"
import Cropper from "react-cropper"

interface ImgData {
  imgUrl: string
  fileName: string
  fileType: string
}

function dataURItoBlob(dataURI) {
  let binary = atob(dataURI.split(",")[1])
  let array: number[] = []
  for (let i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i))
  }
  return new Blob([new Uint8Array(array)], { type: "image/jpeg" })
}

export const ImageUploader = () => {
  let cropperRef = useRef<HTMLImageElement>(null)
  let [imageData, setImageData] = useState<ImgData>({ imgUrl: "", fileName: "", fileType: "" })
  let [savableImage, setSavableImage] = useState<string | null>("")
  let [resStatus, setResStatus] = useState({ saved: false, sent: false })
  let [isResetting, setIsResetting] = useState(false)
  const clearSavableImage = () => {
    setSavableImage(null)
  }

  const onCrop = () => {
    const imageElement: any = cropperRef?.current
    const cropper: any = imageElement?.cropper

    setSavableImage(cropper.getCroppedCanvas().toDataURL("image/jpeg"))
  }
  const handleFileChange = async (e) => {
    e.preventDefault()
    const imageElement: any = cropperRef?.current
    const cropper: any = imageElement?.cropper
    cropper.enable()

    clearSavableImage
    setImageData({
      imgUrl: URL.createObjectURL(e.target.files[0]),
      fileName: e.target.files[0].name,
      fileType: e.target.files[0].type,
    })
  }

  useEffect(() => {
    clearSavableImage
    setImageData({ imgUrl: "", fileName: "", fileType: "" })
    setResStatus({ saved: false, sent: false })
    setIsResetting(false)
  }, [isResetting])

  const uploadCroppedImage = (e) => {
    e.preventDefault()
    const imageElement: any = cropperRef?.current
    const cropper: any = imageElement?.cropper
    cropper.disable()
    const body = dataURItoBlob(savableImage)
    fetch("/api/upload", {
      method: "PUT",
      body: JSON.stringify({ type: imageData.fileType, name: imageData.fileName }),
    })
      .then((response) => response.json())
      .then(async (signedUrl) => {
        const res = await fetch(signedUrl.url, { method: "PUT", body })
        res.status === 200
          ? setResStatus({ saved: true, sent: true })
          : setResStatus({ saved: false, sent: true })
      })
  }
  const handleReset = (e) => {
    e.preventDefault()
    setIsResetting(true)
    const imageElement: any = cropperRef?.current
    const cropper: any = imageElement?.cropper

    cropper.clear()
    cropper.reset()
    cropper.enable()
  }

  return (
    <div>
      <div className="mt-1 sm:mt-0 sm:col-span-2">
        <div className="flex items-center">
          <div>
            <Cropper
              src={imageData.imgUrl}
              style={{ height: 256, width: 256 }}
              // Cropper.js options
              crop={onCrop}
              ref={cropperRef}
              aspectRatio={1}
              minCropBoxWidth={256}
              viewMode={3}
              dragMode={"move"}
              background={false}
              cropBoxMovable={false}
              cropBoxResizable={false}
              zoomable={true}
              zoomOnWheel={true}
              guides={false}
            />
          </div>

          <input
            accept="image/*"
            className={"hidden"}
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleFileChange}
          />
          <div className="flex flex-col ml-5 space-y-2">
            <label htmlFor="contained-button-file">
              {!imageData.imgUrl && (
                <div className="px-4 py-2 text-white bg-indigo-600 border border-transparent rounded-md shadow whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none filter semibold hover:bg-indigo-700 focus:outline-none sm:text-sm">
                  <ButtonBase component="span">
                    <p className={"prose text-white text-center"}>Profile Picture</p>
                  </ButtonBase>
                </div>
              )}
            </label>
            {imageData.imgUrl && (
              <>
                {!resStatus.saved && <Button onClick={uploadCroppedImage}>Save</Button>}
                <Button onClick={handleReset}>Reset</Button>
              </>
            )}
            {resStatus.sent && resStatus.saved && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{"Image Saved!"}</span>
              </>
            )}
            {resStatus.sent && !resStatus.saved && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{"Something happened. Try again or contact support"}</span>{" "}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
