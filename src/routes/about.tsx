import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1 className="text-2xl">
        <strong>Explainability</strong>
      </h1>

      <div>
        <p>
          This app provides a predictive analysis to help individuals assess
          their risk of developing preeclampsia during pregnancy. By entering
          key information such as age, pre-pregnancy weight, annual income,
          socioeconomic status, and medical history (including hypertension,
          diabetes, preeclampsia, and proteinuria levels), the app uses a
          machine learning model to analyze your data and predict whether you
          are at risk of preeclampsia.
        </p>

        <h2>Factors Considered in the Prediction:</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Age</strong>
          </li>
          <li>
            <strong>Pre-pregnancy weight</strong>
          </li>
          <li>
            <strong>Annual income and socioeconomic status</strong>
          </li>
          <li>
            <strong>History of hypertension, diabetes, or preeclampsia</strong>
          </li>
          <li>
            <strong>Proteinuria levels</strong>
          </li>
          <li>
            <strong>Blood pressure (systolic and diastolic)</strong>
          </li>
          <li>
            <strong>Parity (number of pregnancies)</strong>
          </li>
        </ul>

        <p>
          Once the data is inputted, the model processes it and provides a
          prediction: whether you are at risk of developing preeclampsia or not.
          The result will inform you whether or not you should consult with your
          healthcare provider for further evaluation and management.
        </p>

        <p>
          By offering this personalized risk prediction, the app aims to support
          individuals in taking early action for their health during pregnancy.
        </p>
      </div>
    </>
  );
}
