import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function FunctionExpression() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Function Expression</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Function Expression'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-naming-functions" 
                nextPath="/js-arrow-function"
            />
        </section>
    );
}