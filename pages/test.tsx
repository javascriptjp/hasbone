import { Button, Card, CardBody, Input } from "@nextui-org/react"
import { useState } from "react"
import Axios from "axios"

function Tester() {
    const [url, setUrl] = useState("")
    const [res, setRes] = useState("")
    return <Card className="p-5 w-[400px] border-1 border-[rgba(100,100,100,0.2)]">
        <CardBody>
            <Input
                className="my-2"
                label="api test"
                labelPlacement="outside"
                placeholder="Enter path"
                onValueChange={setUrl}
                defaultValue={"/api/"}
            />
            <Button className="my-2" disableRipple onClick={async () => {
                try {
                    const res = await Axios(url)
                    setRes(JSON.stringify(res.data))
                } catch (e) {
                    if (Axios.isAxiosError(e) && e.response) {
                        setRes(`retard ${e.response.status}/${e.message}`)
                    }
                }
            }}>Enter</Button>
            {res}
        </CardBody>
    </Card>
}

export default function Login() {
    return <main className="min-h-screen">
        <Button className="my-2" disableRipple>test</Button>
        <Tester />
        <Tester />
    </main>
}
