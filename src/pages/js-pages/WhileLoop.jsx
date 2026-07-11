import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function WhileLoop() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>While Loop</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='While Loop'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-nullish-operator" 
                nextPath="/js-for-loop"
            />
        </section>
    );
}