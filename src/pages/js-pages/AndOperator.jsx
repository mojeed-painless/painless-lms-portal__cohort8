import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function AndOperator() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>AND Operator</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='AND Operator'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-or-operator" 
                nextPath="/js-not-operator"
            />
        </section>
    );
}