import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function StringComparison() {

    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>String Comparison</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    
                        <VideoBox 
                            title='String Comparison'
                            code='Cn1nqFXu7KE'
                        />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-number-comparison" 
                nextPath="/js-mixed-comparison"
            />
        </section>
    );
}
