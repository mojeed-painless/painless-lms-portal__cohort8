import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function ContinueLoop() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Continue Loop</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Continue Loop'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-breaking-loop" 
                nextPath="/js-function-declaration"
            />
        </section>
    );
}