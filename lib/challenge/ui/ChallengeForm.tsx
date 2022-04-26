import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Image,
  Select,
  Text,
  Textarea,
  HStack,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useDetail } from "@lib/core/data/DetailProvider";
import { toaster } from "@lib/core/ui/helpers/toaster";
import { useAsyncForm } from "@lib/core/utils/useAsyncData";
import { TaskList } from "@lib/task/ui/TaskList";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ChallengeViewModel } from "../data/challenge";
import {
  useChallengeCreate,
  useChallengeDelete,
  useChallenges,
  useChallengeUpdate,
} from "../data/hooks";
type Props = {
  data?: ChallengeViewModel;
};
export const ChallengeForm = ({ data }: Props) => {
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useAsyncForm<ChallengeViewModel>(data || ({} as ChallengeViewModel));
  const { setDetailReactNode } = useDetail();
  const { refetch, data: challenges } = useChallenges();
  const { mutate: create } = useChallengeCreate();
  const { mutate: update } = useChallengeUpdate();
  const { mutate: Delete } = useChallengeDelete();
  const planetField = watch("planet");
  useEffect(() => {
    if (!data) reset();
  }, [data]);
  const onDelete = () => {
    console.log("delete");
    data &&
      Delete(data.id, {
        onSuccess: () => {
          setDetailReactNode(null);
          refetch();
        },
      });
  };
  const onCreate = handleSubmit((input) => {
    create(input, {
      onSuccess: (res) => {
        toaster.success("Successful!");
        refetch().then((challenges) => {
          setDetailReactNode(
            <ChallengeForm data={challenges.data?.find((r) => r.id == res)} />
          );
        });
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
    <Flex w="full">
      <Box flex="1">
        <FormControl isInvalid={!!errors.title}>
          <FormLabel>Гарчиг</FormLabel>
          <Input
            type="text"
            {...register("title", { required: "Required!" })}
          />
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
        <FormControl isInvalid={!!errors.reward}>
          <FormLabel pt={4}>Шагнал</FormLabel>
          <Textarea
            {...register("reward", { required: "Required!" })}
            noOfLines={3}
          />
          <FormErrorMessage>{errors.reward?.message}</FormErrorMessage>
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
        <FormControl isInvalid={!!errors.planet}>
          <FormLabel pt={4}>Гараг</FormLabel>
          <Image width="16" height="16" src={`/${planetField}`} />
          <Select
            defaultValue={"planets/Low Poly Planet Earth.H03 1.png"}
            {...register("planet", { required: "Required!" })}
          >
            <option value="planets/Low Poly Planet Earth.H03 1.png">
              Earth
            </option>
            <option value="planets/red 1.png">Mars</option>
            <option value="planets/Low Poly Sun.I09 1.png">Jupiter</option>
          </Select>
          <FormErrorMessage>{errors.planet?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.color}>
          <FormLabel pt={4}>Өнгө</FormLabel>
          <Input
            type="color"
            {...register("color", { required: "Required!" })}
          />
          <FormErrorMessage>{errors.color?.message}</FormErrorMessage>
        </FormControl>

        <HStack justify="flex-end" pt={4} mb={10}>
          {data && (
            <Button onClick={onUpdate} colorScheme={"green"} >
              Шинэчлэх
            </Button>
          )}
          {data && (
            <Button onClick={onDelete} colorScheme={"red"} >
              Устгах
            </Button>
          )}

          {data == undefined && (
            <Button onClick={onCreate} colorScheme={"blue"}>
              Үүсгэх
            </Button>
          )}
        </HStack>
      </Box>
      <Box w="6" />
      <Box flex="1">
        <Heading size="md" pb={5}>Даалгавар</Heading>
        <TaskList challengeId={data?.id} />
      </Box>
    </Flex>
  );
};
