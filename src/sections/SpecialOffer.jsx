import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className="flex items-center justify-between gap-10 max-xl:flex-col-reverse max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold font-palanquin">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          deleniti odio ipsam aspernatur distinctio quidem excepturi culpa earum
          non qui maiores omnis, deserunt minima? Numquam nemo reprehenderit
          similique temporibus repudiandae.
        </p>
        <p className="mt-6 info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ut aspernatur omnis amet vitae nisi eos iure ipsam fugit inventore.
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
