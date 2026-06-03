import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckBox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import Spinner from "../assets/icons/spinner.svg?react";
import TrashIcon from "../assets/icons/Trash-Regular.svg?react";
import Check from "../assets/icons/Check-Regular.svg?react";
import Pensil from "../assets/icons/PencilSimple-Regular.svg?react";
import Close from "../assets/icons/X-Regular.svg?react";
import Plus from "../assets/icons/Plus-Regular.svg?react";

export default function PageComponents() {
  return (
    <Container>
      <div className="grid gap-10">
        <div className="mt-2.5">
          <Card size="md">
            <div className="flex items-center justify-start">
              <Icon svg={Spinner} className="fill-pink-base" animate />
              <span className="ml-2">IFoodAI!</span>
            </div>
          </Card>
        </div>
        <div className="flex flex-col gap-1">
          <Text variant="body-sm-bold" className="text-pink-base">
            Olá BC!
          </Text>
          <Text className="text-green-base">OPA!</Text>
          <Text variant="body-md-bold">EI!</Text>
          <Text variant={"body-sm-bold"}>Levar the dog passear!</Text>
        </div>
        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-pink-base" />
          <Icon svg={Spinner} className="fill-green-base" animate />
          <Icon svg={Pensil} />
          <Icon svg={Check} className="fill-pink-base" />
          <Icon svg={Close} />
          <Icon svg={Plus} />
        </div>
        <div className="flex gap-1">
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loading>9</Badge>
        </div>

        <div>
          <Button icon={TrashIcon}>Nova Tarefa</Button>
          <Button icon={TrashIcon} handling>
            Adicionando!
          </Button>
        </div>
        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant={"secondary"} />
          <ButtonIcon icon={TrashIcon} variant={"tertiary"} />
          <ButtonIcon icon={TrashIcon} loading />
          <ButtonIcon icon={TrashIcon} handling />
        </div>

        <div>
          <InputText />
        </div>

        <div>
          <InputCheckBox />
          <InputCheckBox loading />
        </div>

        <div>
          <Card size="md">PayPal - Pix - Cartao</Card>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="w-96 h-6" />
        </div>
      </div>
    </Container>
  );
}
