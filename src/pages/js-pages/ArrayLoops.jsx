import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function ArrayLoops() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Array Loops</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Array Loops'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-multiple-typed-array" 
                nextPath="/js-pop-shift-methods"
            />
        </section>
    );
}