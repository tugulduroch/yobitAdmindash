import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { toaster } from "@lib/core/ui/helpers/toaster";
import { useAsyncForm } from "@lib/core/utils/useAsyncData";
import {
  useTaskCreate,
  useTaskDelete,
  useTasks,
  useTaskUpdate,
} from "../data/hooks";
import { Task } from "../data/task";

type Props = {
  data: Task | undefined;
  challengeId: string | undefined;
};
export const TaskForm = ({ data, challengeId }: Props) => {
  const { refetch } = useTasks(challengeId);
  const { mutate: create } = useTaskCreate();
  const { mutate: update } = useTaskUpdate();
  const { mutate: Delete } = useTaskDelete();
  const {
    register,
    watch,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useAsyncForm<Task>(data || ({} as Task));
  setValue("challengeId", challengeId || "");
  const onDelete = () => {
    console.log("delete");
    data &&
      Delete(data.id, {
        onSuccess: () => {
          refetch();
        },
      });
  };
  const onCreate = handleSubmit((input) => {
    create(input, {
      onSuccess: (res) => {
        toaster.success("Successful!");
        refetch();
      },
    });
    console.log(input);
  });
  const onUpdate = handleSubmit((input) => {
    console.log(input);
    update(input, {
      onSuccess: (res) => {
        toaster.success("Successful!");
        refetch();
      },
    });
  });
  return (
    <>
      <FormControl isInvalid={!!errors.title}>
        <FormLabel pt={4}>Гарчиг</FormLabel>
        <Input type="text" {...register("title", { required: "Required!" })} />
        <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.content}>
        <FormLabel pt={4}>Агуулга</FormLabel>
        <Textarea
          {...register("content", { required: "Required!" })}
          noOfLines={3}
        />
        <FormErrorMessage>{errors.content?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.startDate}>
        <FormLabel pt={4}>Эхлэх өдөр</FormLabel>
        <Input
          type="datetime-local"
          {...register("startDate", { required: "Required!" })}
        />
        <FormErrorMessage>{errors.startDate?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.endDate}>
        <FormLabel pt={4}>Дуусах өдөр</FormLabel>
        <Input
          type="datetime-local"
          {...register("endDate", { required: "Required!" })}
        />
        <FormErrorMessage>{errors.endDate?.message}</FormErrorMessage>
      </FormControl>

      <HStack justify="flex-end">
        {data && (
          <Button onClick={onUpdate} colorScheme={"green"}>
            Шинэчлэх
          </Button>
        )}
        {data && (
          <Button onClick={onDelete} colorScheme={"red"}>
            Устгах
          </Button>
        )}

        {data == undefined && (
          <Button onClick={onCreate} colorScheme={"blue"} mt={6}>
            Үүсгэх
          </Button>
        )}
      </HStack>
    </>
  );
};
