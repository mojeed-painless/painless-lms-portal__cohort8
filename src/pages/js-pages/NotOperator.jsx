import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function NotOperator() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>NOT Operator</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='NOT Operator'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-and-operator" 
                nextPath="/js-nullish-operator"
            />
        </section>
    );
}