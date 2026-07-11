import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function OrOperator() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>OR Operator</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='OR Operator'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-switch-statement" 
                nextPath="/js-and-operator"
            />
        </section>
    );
}