import styled from '@emotion/styled';
import { Carousel } from 'grommet';
import { mobile } from '../responsive';
import { Feedbacks } from '../Data';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 80px 50px;
`;

export const ContentBox = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row;
    border-radius: 0 100px 0 100px;
    background-color: var(--color-exlight-purple);
`;

export const Box = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row;
    border-radius: 0 100px 0 100px;
    // background-color: var(--color-exlight-purple);
    ${mobile({
        flexFlow: "column",
        borderRadius: "0",
        position: "relative"
    })}
`;

export const ImageBox = styled.div`
    flex: 1;
    background-position: center;
    background-color: var(--color-exlight-purple);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    transition: all 1000ms;
    border-radius: 0 0 0 100px;
    ${mobile({
        borderRadius: 0,
        flex: 1
    })}
`;

export const WordBox = styled.div`
    flex: 1.2;
    height: 100%;
    padding: 30px 50px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 0 50px;
    transition: all 500ms;
    gap: 20px;
    ${mobile({
        padding: "20px",
        gap: "8px",
        position: "absolute",
        backgroundColor: "#f0f8ff57",
        borderRadius: "0px",
        width: "100%",
        height: "40%",
        top: "35%"
    })};
`;

export const Title = styled.span`
    text-transform: uppercase;
    font-family: monospace;
    font-size: 14px;
    font-weight: 700;
    ${mobile({
        fontSize: "15px",
    })};
`;

export const Words = styled.p`
    transition: all 500ms;
    font-size: 30px;
    color: var(--color-purple);
    font-family: Georgia, serif;
    font-style: italic;
    ${mobile({
        fontSize: "15px",
        fontWeight: "600"
    })};
`;

export const Author = styled.span`
    transition: all 500ms;
    font-size: 14px;
`;

function Feedback() {

//     const [feed, setFeed] = useState({...Feedbacks[0]});
//     const [num, setNum] = useState(0);
//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (num < Feedbacks.length-1) {
//                 setNum(num + 1);
//             } else setNum(0);
//             return () => clearInterval(interval);
//         }, 15000)
//     }, [num])

//     useEffect(()=>{
//         setFeed({...Feedbacks[num]});
//     }, [num])
  return (
    <Container>
        <ContentBox>
            <Carousel play={10000} fill>
                <Box>
                    <ImageBox style={{backgroundImage: `url(${Feedbacks[0].image})`}}/>
                    <WordBox>
                        <Title>Amazing Feedback</Title>
                        <Words>“{Feedbacks[0].words}”</Words>
                        <Author><b>{Feedbacks[0].name}</b> <br/> {Feedbacks[0].about}</Author>
                    </WordBox>
                </Box>
                <Box>
                    <ImageBox style={{backgroundImage: `url(${Feedbacks[1].image})`}}/>
                    <WordBox>
                        <Title>Amazing Feedback</Title>
                        <Words>“{Feedbacks[1].words}”</Words>
                        <Author><b>{Feedbacks[1].name}</b> <br/> {Feedbacks[1].about}</Author>
                    </WordBox>
                </Box>
                <Box>
                    <ImageBox style={{backgroundImage: `url(${Feedbacks[2].image})`}}/>
                    <WordBox>
                        <Title>Amazing Feedback</Title>
                        <Words>“{Feedbacks[2].words}”</Words>
                        <Author><b>{Feedbacks[2].name}</b> <br/> {Feedbacks[2].about}</Author>
                    </WordBox>
                </Box>
                <Box>
                    <ImageBox style={{backgroundImage: `url(${Feedbacks[3].image})`}}/>
                    <WordBox>
                        <Title>Amazing Feedback</Title>
                        <Words>“{Feedbacks[3].words}”</Words>
                        <Author><b>{Feedbacks[3].name}</b> <br/> {Feedbacks[3].about}</Author>
                    </WordBox>
                </Box>
                <Box>
                    <ImageBox style={{backgroundImage: `url(${Feedbacks[4].image})`}}/>
                    <WordBox>
                        <Title>Amazing Feedback</Title>
                        <Words>“{Feedbacks[4].words}”</Words>
                        <Author><b>{Feedbacks[4].name}</b> <br/> {Feedbacks[4].about}</Author>
                    </WordBox>
                </Box>
            </Carousel>
        </ContentBox>
    </Container>
  )
  }

export default Feedback
