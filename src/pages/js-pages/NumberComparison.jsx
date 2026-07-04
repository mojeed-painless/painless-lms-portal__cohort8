import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function NumberComparison() {

    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Number Comparison</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    
                        <VideoBox 
                            title='Number Comparison'
                            code='CVg8jViGwKE'
                        />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-increment-decrement" 
                nextPath="/js-string-comparison"
            />
        </section>
    );
}
