import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from './index';

interface QuestionAttributes {
  id: number;
  question: string;
  correctAnswer: string;
  wrongAnswer1: string;
  wrongAnswer2: string;
  wrongAnswer3: string;
}

interface QuestionCreationAttributes extends Optional<QuestionAttributes, 'id'> {}

class Question extends Model<QuestionAttributes, QuestionCreationAttributes> implements QuestionAttributes {
  public id!: number;
  public question!: string;
  public correctAnswer!: string;
  public wrongAnswer1!: string;
  public wrongAnswer2!: string;
  public wrongAnswer3!: string;
}

Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correctAnswer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wrongAnswer1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wrongAnswer2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wrongAnswer3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'Question',
    tableName: 'questions',
  }
);

export default Question;
