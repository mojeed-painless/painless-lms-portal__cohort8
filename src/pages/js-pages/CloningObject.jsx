import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function CloningObject() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Cloning Object</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Cloning Object'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-object-referencing" 
                nextPath="/js-object-methods"
            />
        </section>
    );
}