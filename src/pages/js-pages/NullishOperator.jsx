import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function NullishOperator() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Nullish Operator</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Nullish Operator'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-not-operator" 
                nextPath="/js-if-statement"
            />
        </section>
    );
}