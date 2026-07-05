import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function BreakingLoop() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Breaking Loop</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Breaking Loop'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-for-loop" 
                nextPath="/js-continue-loop"
            />
        </section>
    );
}