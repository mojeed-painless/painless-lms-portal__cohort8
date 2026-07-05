import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function ArrowFunction() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Arrow Function</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Arrow Function'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-function-expression" 
                nextPath="/js-objects"
            />
        </section>
    );
}