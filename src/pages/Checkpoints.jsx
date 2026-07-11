
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/styles/quiz.css';
import '../assets/styles/checkpoint.css';
import TopicQuiz, { AttemptedTopicQuiz } from '../components/common/TopicQuiz';
import {
  WandSparkles,
} from 'lucide-react';

export default function Checkpoints() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedTopic = new URLSearchParams(location.search).get('topic');

  return (
    <div className="quiz__container">
      <div className="transcript__header">
        <div className="transcript__header-title">
          <h1>
            <span><WandSparkles size={25}/></span> 
            Checkpoints
          </h1>
          <p className="transcript__header-subtitle"> Check out list of checkpoints you already attempted</p>
        </div>
      </div>

      <AttemptedTopicQuiz selectedTopic={selectedTopic} />

      {selectedTopic && (
        <div className="checkpoint-review">
          <div className="checkpoint-review__header">
            {/* <button className="checkpoint-review__back" onClick={() => navigate('/checkpoints')}>
              Back to Checkpoints
            </button> */}
            <h2>Review checkpoint: {selectedTopic}</h2>
          </div>
          <TopicQuiz currentTopic={selectedTopic} onSelect={() => navigate('/checkpoints')} autoOpenAttempted />
        </div>
      )}
        
    </div>
  );
}
