import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function IfStatement() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>If Statement</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='If Statement'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-mixed-comparison" 
                nextPath="/js-elseif-statement"
            />
        </section>
    );
}