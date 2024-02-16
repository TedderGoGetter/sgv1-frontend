import { useState, useEffect } from "react"
import { Col, Container, Row, InputGroup, Form, Button } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Sound Geek", "Crate Digger", "Synth Freak", "Gear Head", "Modular Entusiast"]
    const [text, setText] = useState('')
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100)

    useEffect(() => {
        let ticker: any = setInterval(() => {
            tick()
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length +1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        {/* <span className="tagline">Hello World!</span> */}
                        <h1>{`I am a `}<span className="wrap">{text}</span></h1>
                        {/* <p>Soundgeek is the best thing to ever happen to this planet frfr</p> */}
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="Find a song, artist, or piece of gear"
                            aria-label="Search for a song, artist or piece of gear"
                            aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                            Button
                            </Button>
                        </InputGroup>
                        <button onClick={() => console.log('connect')}>Or Post a song <ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner